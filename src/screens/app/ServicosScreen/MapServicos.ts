import { IconPros } from "@components";

type ListaServicos = 'Consulta' | 'Exame' | 'Vacinação' | 'Telemedicina' | 'Fisioterapia' | 'Cuidados';

interface Teste {
        tela:ListaServicos,
        icone:IconPros['name']
}


// export const testeLista: Record<ListaServicos,Teste>;