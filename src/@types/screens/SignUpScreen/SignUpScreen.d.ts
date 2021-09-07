declare namespace SignUpScreenNamespace {
  export interface Inputs {
    name: string;
    email: string;
    password: string;
  }

  export interface HandleInputChangeFunctionArgs {
    key: keyof Inputs;
    value: string;
  }
}
