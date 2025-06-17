import { Routes } from '@angular/router';
import { CestaComponent } from './cesta/cesta.component';
import { EsqueciComponent } from './esqueci/esqueci.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import { LoginComponent } from './login/login.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { ContatosComponent } from './contatos/contatos.component';
import { ContatoComponent } from './contato/contato.component';
export const routes: Routes = [
    {path:"cesta", component: CestaComponent},
    {path:"esqueci", component: EsqueciComponent},
    {path:"pesquisa", component:PesquisaComponent},
    {path:"detalhe", component: DetalheComponent},
    {path:"cadastro", component:CadastroComponent},
    {path:"vitrine", component:VitrineComponent},
    {path:"", component:VitrineComponent},
    {path:"login", component:LoginComponent},
    {path: "Contato", component: ContatoComponent},
    {path: "sobre", component: SobrenosComponent}

];
