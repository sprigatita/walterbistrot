import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalianAperitivoComponent } from './italian-aperitivo.component';

describe('ItalianAperitivoComponent', () => {
  let component: ItalianAperitivoComponent;
  let fixture: ComponentFixture<ItalianAperitivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItalianAperitivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItalianAperitivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
