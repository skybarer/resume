import { Routes } from '@angular/router';
import { GetResumeDataComponent } from './get-resume-data/get-resume-data.component';
import { BatchResumeDataComponent } from './batch-resume-data/batch-resume-data.component';
import { HomeComponent } from './home/home.component';
import { CandidateDetailsListComponent } from './candidate-details-list/candidate-details-list.component';
import { UpdateCandidateDetailsComponent } from './update-candidate-details/update-candidate-details.component';
import { ViewCandidateDetailsComponent } from './view-candidate-details/view-candidate-details.component';
import { UploadCandidateProfileComponent } from './upload-candidate-profile/upload-candidate-profile.component';
import { ClientDetailsListComponent } from './client-details-list/client-details-list.component';
import { ClientDetailsUpdateComponent } from './client-details-update/client-details-update.component';
import { DmuDetailsAddComponent } from './dmu-details-add/dmu-details-add.component';
import { DmuDetailsSearchComponent } from './dmu-details-search/dmu-details-search.component';
import { SowPessSearchComponent } from './sow-pess-search/sow-pess-search.component';
import { SowPessUpdateComponent } from './sow-pess-update/sow-pess-update.component';
import { CandidateProfileSummaryComponent } from './candidate-profile-summary/candidate-profile-summary.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { AuthGuard } from './login/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { CandidateProfileSummaryAddComponent } from './candidate-profile-summary-add/candidate-profile-summary-add.component';
import { MailTempleteComponent } from './mail-templete/mail-templete.component';
import { BatchUploadComponent } from './batch-upload/batch-upload.component';

export const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'customer-home',
    component: CustomerHomeComponent,
    children: [
      {
        path: 'candidate-profile-summary',
        component: CandidateProfileSummaryComponent
      },
      {
        path: 'sow-pess-update',
        component: SowPessUpdateComponent
      },
      {
        path: 'sow-pess-search',
        component: SowPessSearchComponent
      },
      {
        path: 'dmu-details-search',
        component: DmuDetailsSearchComponent
      },
      {
        path: 'dmu-details-add',
        component: DmuDetailsAddComponent
      },
      {
        path: 'client-details-update',
        component: ClientDetailsUpdateComponent
      },
      {
        path: 'client-details-list',
        component: ClientDetailsListComponent
      },
      {
        path: 'upload-candidate-profile',
        component: UploadCandidateProfileComponent
      },
      {
        path: 'view-candidate-details',
        component: ViewCandidateDetailsComponent
      },
      {
        path: 'update-candidate-details',
        component: UpdateCandidateDetailsComponent
      },
      {
        path: 'list-all-candidate-details',
        component: CandidateDetailsListComponent
      },
      {
        path: 'batch-upload',
        component: BatchResumeDataComponent
      },
      {
        path: 'single-upload',
        component: GetResumeDataComponent
      },
      {
        path: '**',
        component: HomeComponent,
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-home',
    component: AdminHomeComponent,
    children: [
      {
        path: 'batch-upload1',
        component: BatchUploadComponent
      },
      {
        path: 'mail-templete',
        component: MailTempleteComponent
      },
      {
        path: 'candidate-profile-summary-add',
        component: CandidateProfileSummaryAddComponent
      },
      {
        path: 'candidate-profile-summary',
        component: CandidateProfileSummaryComponent
      },
      {
        path: 'sow-pess-update',
        component: SowPessUpdateComponent
      },
      {
        path: 'sow-pess-search',
        component: SowPessSearchComponent
      },
      {
        path: 'dmu-details-search',
        component: DmuDetailsSearchComponent
      },
      {
        path: 'dmu-details-add',
        component: DmuDetailsAddComponent
      },
      {
        path: 'client-details-update',
        component: ClientDetailsUpdateComponent
      },
      {
        path: 'client-details-list',
        component: ClientDetailsListComponent
      },
      {
        path: 'upload-candidate-profile',
        component: UploadCandidateProfileComponent
      },
      {
        path: 'view-candidate-details',
        component: ViewCandidateDetailsComponent
      },
      {
        path: 'update-candidate-details',
        component: UpdateCandidateDetailsComponent
      },
      {
        path: 'list-all-candidate-details',
        component: CandidateDetailsListComponent
      },
      {
        path: 'batch-upload',
        component: BatchResumeDataComponent
      },
      {
        path: 'single-upload',
        component: GetResumeDataComponent
      },
      {
        path: '**',
        component: HomeComponent,
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];



