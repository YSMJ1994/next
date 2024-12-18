import React from 'react';
import { Collapse } from '@alifd/next';
import { Types, parseData, NodeType } from '@alifd/adaptor-helper';
import type { INode } from '@alifd/adaptor-helper/types/parse-data';

interface AdaptorProps {
    state: string;
    width: number;
    data: string;
    style: React.CSSProperties;
}

export default {
    name: 'Collapse',
    editor: () => ({
        props: [
            {
                name: 'state',
                label: 'Status',
                type: Types.enum,
                options: ['normal', 'disabled'],
                default: 'normal',
            },
            {
                name: 'width',
                type: Types.number,
                default: 400,
            },
        ],
        data: {
            active: true,
            disable: true,
            default:
                '*Panel Header 1\n\tPeople always make mistakes, frustrated, nerve-racking, but cannot remain stagnant.\nPanel Header 2\n\tPeople always make mistakes, frustrated, nerve-racking, but cannot remain stagnant.\nPanel Header 3\n\tPeople always make mistakes, frustrated, nerve-racking, but cannot remain stagnant.\n',
        },
    }),
    adaptor: ({ state, width, data, style = {}, ...others }: AdaptorProps) => {
        const list = (parseData(data) as INode[]).filter(node => NodeType.node === node.type);
        const expandedKeys = [] as string[];
        const children = list.map(({ state, value, children }, index) => {
            if (state === 'active') {
                expandedKeys.push(`panel_${index}`);
            }

            return (
                <Collapse.Panel
                    disabled={state === 'disabled'}
                    key={`panel_${index}`}
                    title={value as string}
                >
                    {children && children.length > 0 ? children[0].value : ''}
                </Collapse.Panel>
            );
        });
        return (
            <Collapse
                {...others}
                style={{
                    minWidth: width,
                    ...style,
                }}
                expandedKeys={state === 'disabled' ? [] : expandedKeys}
                disabled={state === 'disabled'}
            >
                {children}
            </Collapse>
        );
    },
};
