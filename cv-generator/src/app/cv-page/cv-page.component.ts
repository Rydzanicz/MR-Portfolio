import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  selector: 'app-cv-page',
  templateUrl: './cv-page.component.html',
  styleUrls: ['./cv-page.component.css'],
})
export class CvPageComponent implements OnInit {
  cvForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.cvForm = this.fb.group({
      personalInfo: this.fb.group({
        firstName: ['MICHAŁ', Validators.required],
        lastName: ['RYDZANICZ', Validators.required],
        jobTitle: ['JUNIOR SOFTWARE DEVELOPER', Validators.required],
        phone: ['785 640 173', Validators.required],
        email: ['rydzanicz.mm@gmail.com', [Validators.required, Validators.email]],
        city: ['Wrocław', Validators.required],
      }),
      aboutMe: ['Początkowe etapy mojej kariery zawodowej...', Validators.required],
      experiences: this.fb.array([
        this.createExperienceGroup('JUNIOR SOFTWARE DEVELOPER', 'Cinkciarz.pl Sp. z o.o.', '2021', 'obecnie', [
          'Tworzenie kodu zgodnie z wytycznymi',
          'Testowanie i debugowanie kodu',
        ]),
        this.createExperienceGroup('ANIMATOR/MASKOTKA', 'Klockoteka', '2016', '2018', [
          'Animator zabaw dziecięcych',
        ]),
      ]),
      education: this.fb.array([
        this.createEducationGroup('INFORMATYKA', 'Uniwersytet Zielonogórski', '2019', '2023', 'Praca inżynierska: Currency Exchange Application'),
        this.createEducationGroup('TECHNIK INFORMATYK', 'Zespół Szkół nr 1 w Lubinie', '2014', '2018'),
      ]),
      skills: this.fb.array([
        this.createSkillGroup('C++', 'Zaawansowany'),
        this.createSkillGroup('Angular', 'Średniozaawansowany'),
      ]),
      interests: ['Długie spacery z pieskiem, podróże motocyklem, tworzenie aplikacji'],
    });
  }

  get experiences(): FormArray {
    return this.cvForm.get('experiences') as FormArray;
  }

  get education(): FormArray {
    return this.cvForm.get('education') as FormArray;
  }

  get skills(): FormArray {
    return this.cvForm.get('skills') as FormArray;
  }

  private createExperienceGroup(jobTitle: string, company: string, start: string, end: string, tasks: string[]): FormGroup {
    return this.fb.group({
      jobTitle: [jobTitle, Validators.required],
      company: [company, Validators.required],
      start: [start, Validators.required],
      end: [end],
      tasks: [tasks.join(', ')],
    });
  }

  private createEducationGroup(degree: string, school: string, start: string, end: string, thesis?: string): FormGroup {
    return this.fb.group({
      degree: [degree, Validators.required],
      school: [school, Validators.required],
      start: [start, Validators.required],
      end: [end],
      thesis: [thesis || ''],
    });
  }

  private createSkillGroup(skillName: string, level: string): FormGroup {
    return this.fb.group({
      skillName: [skillName, Validators.required],
      level: [level, Validators.required],
    });
  }

  addExperience(): void {
    this.experiences.push(this.createExperienceGroup('', '', '', '', []));
  }

  addEducation(): void {
    this.education.push(this.createEducationGroup('', '', '', ''));
  }

  addSkill(): void {
    this.skills.push(this.createSkillGroup('', ''));
  }

  removeExperience(index: number): void {
    this.experiences.removeAt(index);
  }

  removeEducation(index: number): void {
    this.education.removeAt(index);
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  submitForm(): void {
    if (this.cvForm.valid) {
      console.log('CV Data:', this.cvForm.value);
    } else {
      console.error('Formularz jest niepoprawny!');
    }
  }
}
