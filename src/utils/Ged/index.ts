/* eslint-disable camelcase */
import carregamento from '../../../pdf/ser/Carregamento,_Movimentação_e_Transporte_de_Postes_no_CCM_CPFL_Serviços.pdf';
import manual01 from '../../../pdf/ser/Manual_de_Tarefas_Padronizadas_01_Tarefas_Preliminares_CPFL_Serviços.pdf';
import manual02 from '../../../pdf/ser/manual02.pdf';
import manual03 from '../../../pdf/ser/Manual_de_Tarefas_Padronizadas_03_Construção_e_Manutenção_de_Redes.pdf';
import manual04 from '../../../pdf/ser/Manual_de_Tarefas_Padronizadas_04_Construção_e_Manutenção_de_Redes.pdf';
import manual05 from '../../../pdf/ser/Manual_de_Tarefas_Padronizadas_05_Viabilidade_de_Obras_de_Distribuição.pdf';
import manual06 from '../../../pdf/ser/Manual_de_Tarefas_Padronizadas_06_Substituição_de_Medidor_CPFL_Serviços.pdf';
import manual07 from '../../../pdf/ser/manual07.pdf';
import manual08 from '../../../pdf/ser/Manual_de_Tarefas_Padronizadas_08_Instalação_Retirada_do_Equipamento.pdf';
import manual09 from '../../../pdf/ser/Manual_de_Tarefas_Padronizadas_09_Poda_de_Árvores_e_Triturador_de.pdf';
import manual10 from '../../../pdf/ser/Manual_de_Tarefas_Padronizadas_10_DIGGER_DERRICK_com_Execução_de.pdf';
import manual11 from '../../../pdf/ser/Manual_de_Tarefas_Padronizadas_11_Pré_Montagem_de_Estruturas_Rede.pdf';
import manual12 from '../../../pdf/ser/Manual_de_Tarefas_Padronizadas_12_Medição_Rápida_dos_Materiais_Retirados.pdf';
import procedimento from '../../../pdf/ser/procedimento.pdf';
import processo from '../../../pdf/ser/processo.pdf';

export const ged = [
   // ?? .......................................................................
   // ?? .......................................................................
   // ?? .......................................................................
   // ?? .......................................................................
   // ?? .......................................................................

   // ? MANUAL 01

   {
      name: '17603 - Manual de Tarefas Padronizadas 01 - Tarefas Preliminares - CPFL Serviços',
      page: 1,
      uri: manual01,
      title: '',
      color: 'rgb(41, 60, 118)',
   },

   // ?? MANUAL 02

   {
      name: '17604 - Manual de Tarefas Padronizadas 02 - Construção e Manutenção de Redes Desenergizadas até 34,5 kV - CPFL Serviços',
      page: 1,
      uri: manual02,
      title: '',
      color: '#4a3131f',
   },

   // ?? MANUAL 03

   {
      name: '17607 - Manual de Tarefas Padronizadas 03 - Construção e Manutenção de Redes Energizadas de Baixa Tensão - CPFL Serviços',
      page: 1,
      uri: manual03,
      title: '',
      color: 'rgb(57, 43, 79)',
   },

   // ? MANUAL 04
   {
      name: '17610 - Manual de Tarefas Padronizadas 04 - Construção e Manutenção de Redes Energizadas até 34,5 KV - CPFL Serviços',
      page: 1,
      uri: manual04,
      title: '',
      color: 'rgb(43, 77, 79)',
   },

   // ? MANUL 05

   {
      name: ' 17615 - Manual de Tarefas Padronizadas 04 - Construção e Manutenção de Redes Energizadas até 34,5 KV - CPFL Serviços',
      page: 1,
      uri: manual05,
      title: '',
      color: 'rgb(43, 79, 45)',
   },

   // TODO MANUAL 06

   {
      name: '17934 - Manual de Tarefas Padronizadas 06 - Substituição de Medidor - CPFL Serviços',
      page: 1,
      uri: manual06,
      title: '',
      color: 'rgb(78, 79, 43)',
   },

   {
      name: '18390 - Manual de Tarefas Padronizadas 07 - Iluminação Pública - CPFL Serviços',
      page: 1,
      uri: manual07,
      title: '',
      color: 'rgb(78, 79, 43)',
   },

   // TODO MANUAL 08

   {
      name: '18444 - Manual de Tarefas Padronizadas 08 - Instalação Retirada do Equipamento Big Jumper - CPFL Serviços',
      page: 1,
      uri: manual08,
      title: '',
      color: 'rgba(188, 118, 153, 0.631)',
   },

   // ?? MANUAL 09

   {
      name: '18528 - Manual de Tarefas Padronizadas 09 - Poda de Árvores e Triturador de Árvores e Triturador de Galhos em Redes Energizadas - CPFL Servços',
      page: 1,
      uri: manual09,
      title: '',
      color: 'rgba(73, 38, 243, 0.631)',
   },

   // ?? MANUAL 10

   {
      name: '18594 - Manual de Tarefas Padronizadas 10 DIGGER DERRICK com Execução de Atividades em Redes Energizadas - CPFL Serviços',
      page: 1,
      uri: manual10,
      title: '',
      color: 'rgba(59, 68, 43, 0.631)',
   },

   // TODO MANUAL 11 .....................

   {
      name: '18529 - Manual de Tarefas Padronizadas 11 Pré Montagem de Estruturas (Rede de Dist. Nua e Compacta) - CPFL -Serviços',
      page: 1,
      uri: manual11,
      title: 'Manual de Tarefas Padronizadas 11 Pré Montagem de Estruturas Rede',
      color: 'rgba(61, 14, 86, 1)',
   },

   // TODO MANUAL 12

   {
      name: '17600 - Manual de Tarefas Padronizadas 12 Medição Rápida dos Materiais Retirados das Obras - CPFL Serviços',
      page: 1,
      uri: manual12,
      title: '',
      color: 'rgba(31, 79, 51, 1)',
   },

   // ?? CARREGAMENTO

   {
      name: '18443 - Carregamento, Movimentação e Transporte de Postes no CCM - CPFL Serviços',
      page: 1,
      uri: carregamento,
      title: '',
      color: 'rgba(31, 79, 51, 1)',
   },

   {
      name: '19273 - Procedimentos para controle, entrega e recolha de EPI, EPC e Ferramental nas bases operacionais do CCM - CPFL Serviços',
      page: 1,
      uri: procedimento,
      title: '',
      color: 'rgba(31, 79, 51, 1)',
   },

   {
      name: '17618 - Processo de Avaliação de Qualidade de Obras - CPFL Serviços',
      page: 1,
      uri: processo,
      title: '',
      color: 'rgba(31, 79, 51, 1)',
   },

   //* * ........................................................................ */
   //* * ........................................................................ */
   //* * ........................................................................ */
   //* * ........................................................................ */
   //* * ........................................................................ */
   //* * ........................................................................ */
   //* * ........................................................................ */
   //* * ........................................................................ */
   //* * ........................................................................ */

   // ? ........................................................................
   // ? ........................................................................
   // ? ........................................................................
   // ? ........................................................................
   // ? ........................................................................
];
