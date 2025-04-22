 // Definimos una interfaz para el estado
 export interface StateUseReducerTutorial {
  contador: number;
  mostrarTexto: boolean;
}

export interface ActionsUseReducerTutorial{
    type: string
}

//Para el axio
export interface FormatoStringAxios{
  id: number
  body: string
  email: string
  name: string
  postId: number
}