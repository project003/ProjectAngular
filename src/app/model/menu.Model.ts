export class Menu {
  public static menu: Array<any> = [
    {
      doctor: [
        { path: 'doctordash', title: 'Dashboard', icon: 'dashboard',  class: '' },
        { path: 'doctorpost', title: 'Post', icon: '', class: '' },
        { path: 'doctorprofile', title: 'Profile', icon: '', class: '' },
      ],
      emp: [
        { path: 'empdash', title: 'Dashboard', icon: 'dashboard', class: '' },
        { path: '', title: '', icon: '', class: '' },
        { path: '', title: '', icon: '', class: '' }
      ],
      student: [
        { path: 'studash', title: 'Dashboard', icon: 'dashboard', class: '' },
        { path: 'timeline', title: 'Timeline', icon: 'timeline', class: '' },
        { path: 'profile', title: 'Profile', icon: 'profile', class: '' }
      ],
      nurse: [
        { path: 'nursedash', title: 'Dashboard', icon: 'dashboard', class: '' },
        { path: '', title: '', icon: '', class: '' },
        { path: '', title: '', icon: '', class: '' }
      ],
      admin: [
        { path: 'admindash', title: 'Dashboard', icon: 'dashboard', class: '' },
        { path: '', title: '', icon: '', class: '' },
        { path: '', title: '', icon: '', class: '' }
      ]
    }
  ];
}
