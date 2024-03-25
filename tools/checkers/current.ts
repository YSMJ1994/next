/*
------------------------------------------------------------
  author: 珵之
  create: 2024-03-22 16:52:23
  description: 检查当前分支组件
------------------------------------------------------------
*/
import fs from 'fs-extra';
import { escapeRegExp, camelCase, kebabCase } from 'lodash';
import { getComponentName, querySync, execSync, registryTask, SRC_DIR_PATH } from '../utils';

registryTask(__filename, 'check:current', () => {
    const prBaseSha = fs.readFileSync('/tmp/pr_base', 'utf-8').replace(/^[\n\s]+|[\n\s]+$/g, '');
    const commits = querySync('git', ['log', `${prBaseSha}...HEAD`, '--format=%s']);

    const children = fs.readdirSync(SRC_DIR_PATH);
    const namesMap = new Map(
        children
            .map(name => {
                return [
                    [name, name],
                    [camelCase(name), name],
                    [getComponentName(name), name],
                    [kebabCase(name), name],
                ] as Array<[string, string]>;
            })
            .flat()
    );
    const reg = new RegExp(
        `\\((${children
            .map(name => {
                return [name, camelCase(name), getComponentName(name), kebabCase(name)]
                    .map(t => escapeRegExp(t))
                    .join('|');
            })
            .join('|')})\\)`,
        'g'
    );
    const matched = commits.match(reg);
    if (!matched) {
        return;
    }
    const names = Array.from(new Set(matched)).map(t => t.replace(/^\(|\)$/g, ''));
    const targetNames = names.map(name => namesMap.get(name)!);
    execSync('npm', ['run', 'check', ...targetNames]);
});
