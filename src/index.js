import { getData } from './services/index.js';
import { log, logEnter, invalidParamsObjectError, trackingObjectTable, logEventData, boldText } from './utils/index.js'

async function run() {
	try {
		const code = process?.argv[2]?.toUpperCase() ?? invalidParamsObjectError()
		const table = process?.argv[3]?.toUpperCase() ?? null

		logEnter(boldText(`📮 ${code}`));

		const data = await getData(code);

		if (!!data.erro) {
			throw new Error(data.mensagem);
		}

		const events = data?.eventos ?? [];

		if (!!table) {
			console.table(events.map(trackingObjectTable));
			return;
		}

		events.map(logEventData);
		return;

	} catch (error) {
		log(`❌ ${error.message}`);
		return;
	}
}

export { run };
