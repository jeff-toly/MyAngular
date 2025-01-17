import {Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {NameEditorComponent} from './name-editor/name-editor.component';
import {ProfileEditorComponent} from './profile-editor/profile-editor.component';
import {ActorFormComponent} from './actor-form/actor-form.component';
import {ActorFormTemplateComponent} from './actor-form-template/actor-form-template.component';
import {QuestionComponent} from './question/question.component';
import {I18nComponent} from './i18n/i18n.component';
import {OpenCloseComponent} from './open-close/open-close.component';

export const routes: Routes = [
  {path: 'main', component: MainComponent, data: {animation: 'main'}},
  {path: 'user', component: UserComponent, data: {animation: 'user'}},
  {path: 'login', component: LoginComponent, data: {animation: 'login'}},
  {path: 'name-editor', component: NameEditorComponent, data: {animation: 'name-editor'}},
  {path: 'profile-editor', component: ProfileEditorComponent, data: {animation: 'profile-editor'}},
  {path: 'actor-form', component: ActorFormComponent, data: {animation: 'actor-form'}},
  {path: 'actor-form-template', component: ActorFormTemplateComponent, data: {animation: 'actor-form-template'}},
  {path: 'question', component: QuestionComponent, data: {animation: 'question'}},
  {path: 'i18n', component: I18nComponent, data: {animation: 'i18n'}},
  {path: 'animation', component: OpenCloseComponent, data: {animation: 'animation'}},
];
