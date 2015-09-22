angular.module('dCraftApp').service( 'RaceSrv', function(){  
  //Data
  this.races = [{
      name: 'Dwarf',
      //traits
      abilityScoreIncease: '',
      languages: '',
      traits: [{
        title: '',
        description: ''
      },{
        title: '',
        description: ''
      }],
      //Subraces
      subraces: [{
        name: '',
        abilityScoreIncease: '',
        traits: [{
          title: '',
          description: ''
        },{
          title: '',
          description: ''
        }]
      }]
    },{
      name: 'Elf'  
    },{
      name: 'Halfling'  
    },{
      name: 'Human'  
    },{
      name: 'Dragonborn'  
    },{
      name: 'Gnome'  
    },{
      name: 'Half-Elf'  
    },{
      name: 'Half-Orc'  
    },{
      name: 'Tiefling' 
    }];
});
  