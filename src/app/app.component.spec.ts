import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule, MatInputModule, MatTableModule, MatButtonModule, MatSelectModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            imports: [
                BrowserModule,
                MatListModule,
                MatInputModule,
                FlexLayoutModule,
                MatTableModule,
                MatButtonModule,
                FormsModule,
                MatSelectModule,
                BrowserAnimationsModule,
                HttpClientModule,
                MatProgressSpinnerModule
            ],
        }).compileComponents();
    }));
});
