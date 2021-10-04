import fetch from 'node-fetch';
import chalk from 'chalk';

const log = console.log;
const logEnter = (text) => {
	log(text);
	log();
};

const invalidParamsObjectError = () => { throw new Error('Parâmetro de Objeto inválido') }

const iconByStatus = {
	TRANSITO: '🚚',
	'SAIU-ENTREGA-DESTINATARIO': '🙌',
	ENTREGUE: '🎁',
	PAR17: '💸', //Aguardando pagamento
	PAR21: '🔎', //Encaminhado para fiscalização aduaneira
	RecebidoCorreiosBrasil: '🛬',
	POSTAGEM: '📦',
	DEFAULT: '🚧',
};

function getIcon(status) {
	return iconByStatus[status] || iconByStatus.DEFAULT;
}

async function getData(code) {
	const url = 'https://rastreamento.correios.com.br/app/resultado.php';

	const response = await fetch(`${url}?objeto=${code}&mqs=S`);
	const data = await response.json();

	return data;
}

const logEventData = ({ descricao, descricaoWeb, dtHrCriado, unidade, unidadeDestino }) => {
	console.table(descricao, descricaoWeb, dtHrCriado, unidade, unidadeDestino)
	// log(`==> ${getIcon(descricaoWeb)} ${descricao}`);
	// log(chalk.blackBright(`Data: ${dtHrCriado}`));
	// log(chalk.blackBright(`Local: ${unidade.nome}`));

	// if (unidadeDestino) {
	// 	log(chalk.blackBright(`Indo para: ${unidadeDestino?.nome}`));
	// }

	log();
}

async function run() {
	try {
		const code = process?.argv[2]?.toUpperCase() ?? invalidParamsObjectError()

		logEnter(chalk.bold(`📮 ${code}`));

		const data = await getData(code);

		if (!!data.erro) {
			throw new Error(data.mensagem)
		}

		const events = data?.eventos ?? [];

		events.map(logEventData);

	} catch (error) {
		log(`❌ ${error.message}`);
		return;
	}
}

export { run };
