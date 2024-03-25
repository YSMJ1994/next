/*
------------------------------------------------------------
  author: 珵之
  create: 2024-03-22 16:52:23
  description: 检查当前分支组件
------------------------------------------------------------
*/
import fs from 'fs-extra';
import path from 'path';
import { querySync, registryTask, SRC_DIR_PATH } from '../utils';

registryTask(__filename, 'check:current', () => {
    const branchName = querySync('git', ['branch', '--show-current']);
    console.log('[ branch ]', branchName);
    const logs = querySync('git', ['log', '-1', '--format=%s']);
    console.log('[ logs ]', logs);
    
    const prBaseSha = fs.readFileSync('/tmp/pr_base', 'utf-8');
    console.log('[ prBaseSha ]', prBaseSha);
    const commits = querySync('git', ['log', `${prBaseSha}...HEAD`, '--format=%s'])
    console.log('[ commits ]', commits);
    // const GITHUB_OUTPUT_FILE = process.env.GITHUB_OUTPUT as string;
    // const text = fs.readFileSync(GITHUB_OUTPUT_FILE, 'utf-8');
    // console.log('[ text ]', text);
    // const children = fs.readdirSync(SRC_DIR_PATH);
    // const current = children.find(dir => {
    //   // if (re) {

    //   // }
    // })
});
