import chalk from 'chalk';

import { TrackingObject } from './trackingObject.js'

export const log = console.log;
export const blackBrightText = chalk.blackBright
export const boldText = chalk.bold

export const logEnter = (text) => {
	log(text);
	log();
};

export const trackingObjectTable = (event) => new TrackingObject(event)

export const logEventData = (event) => {
	const trackingObject = new TrackingObject(event)

	log(`==> ${trackingObject.Descricao}`);
	log(chalk.blackBright(`Data: ${trackingObject.Data}`));
	log(chalk.blackBright(`Local: ${trackingObject.Local}`));

	if (!!trackingObject['Indo para']) {
		log(chalk.blackBright(`Indo para: ${trackingObject['Indo para']}`));
	}

	log();
}
