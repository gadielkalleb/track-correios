import { getIcon } from './getIcon.js'

export function TrackingObject({ descricao, descricaoWeb, dtHrCriado, unidade, unidadeDestino }) {
	this.Descricao = `${getIcon(descricaoWeb)} ${descricao}`;
	this.Data = dtHrCriado;
	this.Local = unidade.nome;
	this['Indo para'] = unidadeDestino?.nome ?? '';
}
