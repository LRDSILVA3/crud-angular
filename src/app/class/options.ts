export class OptionsSelect {
  /**
   * Nome da opção
   */
  label!: string;
  /**
   * Valor a ser enviado na requisição
   */
  value!: string | boolean | number;

  disable?: boolean;
}
