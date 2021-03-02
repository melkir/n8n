import { IExecuteFunctions } from 'n8n-core';

import {
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import { OptionsWithUri } from 'request';

export class TheMovieDatabase implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'TheMovieDatabase',
		name: 'theMovieDatabase',
		icon: 'file:theMovieDatabase.png',
		group: ['transform'],
		version: 1,
		description: 'Consume TheMovieDatabase API',
		defaults: {
			name: 'TheMovieDatabase',
			color: '#a82a2a',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [],
		properties: [
			// Node properties which the user gets displayed and
			// can change on the node.
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		return [[]];
	}
}
