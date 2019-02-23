import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { routes } from './router.module';
import { NavbarComponent } from './navbar/navbar.component';
import { GetResumeDataComponent } from './get-resume-data/get-resume-data.component';
import { BatchResumeDataComponent } from './batch-resume-data/batch-resume-data.component';
import { HomeComponent } from './home/home.component';
import { CandidateDetailsListComponent } from './candidate-details-list/candidate-details-list.component';
import { TableFilterPipe } from './candidate-details-list/table-filter.pipe';
import { ValidationService } from './get-resume-data/validation.service';
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
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AuthGuard } from './login/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotifierModule } from 'angular-notifier';
import { CandidateProfileSummaryAddComponent } from './candidate-profile-summary-add/candidate-profile-summary-add.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ImageCropperModule } from 'ng2-img-cropper';
import { MailTempleteComponent } from './mail-templete/mail-templete.component';
import { GetResumeService } from './get-resume-data/get-resume.service';
import { ExcelServiceService } from './candidate-details-list/excel-service.service';
import { PaginationService } from './pagination.service';
import { JwtInterceptorService } from './login/jwt-interceptor.service';
import { BatchUploadComponent } from './batch-upload/batch-upload.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GetResumeDataComponent,
    BatchResumeDataComponent,
    HomeComponent,
    CandidateDetailsListComponent,
    TableFilterPipe,
    UpdateCandidateDetailsComponent,
    UploadCandidateProfileComponent,
    ViewCandidateDetailsComponent,
    ClientDetailsListComponent,
    ClientDetailsUpdateComponent,
    DmuDetailsAddComponent,
    DmuDetailsSearchComponent,
    SowPessSearchComponent,
    SowPessUpdateComponent,
    CandidateProfileSummaryComponent,
    LoginComponent,
    CustomerHomeComponent,
    AdminHomeComponent,
    NotFoundComponent,
    CandidateProfileSummaryAddComponent,
    PaginationComponent,
    MailTempleteComponent,
    BatchUploadComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ImageCropperModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right',
        },
        vertical: {
          position: 'top',
        }
      },
      behaviour: {
        autoHide: 3000,
      },
      animations: {
        hide: {
          preset: 'slide',
        }
      }
    })
  ],
  providers: [
    GetResumeService,
    ValidationService,
    ExcelServiceService,
    PaginationService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
