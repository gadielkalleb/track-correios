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

export const getIcon = (status) => iconByStatus?.[status] ?? iconByStatus.DEFAULT;
