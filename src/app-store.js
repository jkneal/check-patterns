import Reflux from 'reflux'
import {extend, forEach} from 'lodash'

import actions from './app-actions'

const data = {
  patternGroups: [
    {
      title: 'Duple Variations',
      subGroups: [
        {
          title: '3-Note Patterns',
          patterns: [
            {
              id: 1,
              titlePrefix: 'Duple',
              title: 'Variation 1',
              subTitle: 'e & a',
              examples: [
                {
                  file: 'audio/primetime.mp3',
                  title: 'Primetime - Ratatat',
                  tempo: 75
                }               
              ]
            },
            {
              id: 2,
              titlePrefix: 'Duple',
              title: 'Variation 2',
              subTitle: '1   & a',
              examples: [
                {
                  file: 'audio/letemin.mp3',
                  title: "Let 'Em In - Wings",
                  tempo: 90
                },
                {
                  file: 'audio/wonderful_tonight.mp3',
                  title: 'Wonderful Tonight - Eric Clapton',
                  tempo: 95
                }                
              ]
            },
            {
              id: 3,
              titlePrefix: 'Duple',
              title: 'Variation 3',
              subTitle: '1 e   a',
              examples: [
                {
                  file: 'audio/watermelonman.mp3',
                  title: 'Watermelonman - Herbie Hancock',
                  tempo: 75
                },
                {
                  file: 'audio/didjitalvibrations.mp3',
                  title: 'Didjital Vibrations - Jamiroquai',
                  tempo: 80
                }              
              ]
            },
            {
              id: 4,
              titlePrefix: 'Duple',
              title: 'Variation 4',
              subTitle: '1 e &',
              examples: [
                {
                  file: 'audio/countach.mp3',
                  title: "Countach - Ratatat",
                  tempo: 95
                }            
              ]
            }                                 
          ]
        },
        {
          title: '2-Note Patterns',
          patterns: [
            {
              id: 5,
              titlePrefix: 'Duple',
              title: 'Variation 5',
              subTitle: '1 e',
              examples: [
                {
                  file: 'audio/41.mp3',
                  title: '#41 - Dave Matthews Band',
                  tempo: 110
                },
                {
                  file: 'audio/sly.mp3',
                  title: 'Sly - Herbie Hancock',
                  tempo: 100
                },
                {
                  file: 'audio/bringonthenight.mp3',
                  title: 'Bring On The Night - The Police',
                  tempo: 110
                }              
              ]
            },
            {
              id: 6,
              titlePrefix: 'Duple',
              title: 'Variation 6',
              subTitle: '& a',
              examples: [
                {
                  file: 'audio/peg.mp3',
                  title: 'Peg - Steely Dan',
                  tempo: 115
                }             
              ]
            },
            {
              id: 7,
              titlePrefix: 'Duple',
              title: 'Variation 7',
              subTitle: '1     a',
              examples: [
                {
                  file: 'audio/echoes.mp3',
                  title: 'Pink Floyd - Echoes',
                  tempo: 70
                },
                {
                  file: 'audio/see_bright_lights.mp3',
                  title: 'R&L Thompson - I Want To See The Bright Lights',
                  tempo: 70
                }               
              ]
            },
            {
              id: 8,
              titlePrefix: 'Duple',
              title: 'Variation 8',
              subTitle: 'e &',
              examples: [
                {
                  file: 'audio/shot_the_sheriff.mp3',
                  title: 'Eric Clapton - I Shot The Sheriff',
                  tempo: 95
                }              
              ]
            },
            {
              id: 9,
              titlePrefix: 'Duple',
              title: 'Variation 9',
              subTitle: 'e   a',
              examples: [
                {
                  file: 'audio/loveisstrange.mp3',
                  title: 'Love Is Strange - Wings',
                  tempo: 60
                },
                {
                  file: 'audio/primetime.mp3',
                  title: 'Primetime - Ratatat',
                  tempo: 75
                }               
              ]
            },
            {
              id: 10,
              titlePrefix: 'Duple',
              title: 'Variation 10',
              subTitle: '1   &',
              examples: [
                {
                  file: 'audio/doitagain.mp3',
                  title: 'Do It Again - Steely Dan',
                  tempo: 120
                }              
              ]
            }                                                         
          ]
        },
        {
          title: '1-Note Patterns',
          patterns: [
            {
              id: 11,
              titlePrefix: 'Duple',
              title: 'Variation 11',
              subTitle: 'e'
            },
            {
              id: 12,
              titlePrefix: 'Duple',
              title: 'Variation 12',
              subTitle: '&',
              examples: [
                {
                  file: 'audio/twostep.mp3',
                  title: 'Two Step - Dave Matthews Band',
                  tempo: 120
                },
                {
                  file: 'audio/goodtimecharlie.mp3',
                  title: "Good Time Charlie - Danny O'Keefe",
                  tempo: 85
                }               
              ]
            },
            {
              id: 13,
              titlePrefix: 'Duple',
              title: 'Variation 13',
              subTitle: 'a',
              examples: [
                {
                  file: 'audio/avalon.mp3',
                  title: 'Avalon - Roxy Music',
                  tempo: 70
                },
                {
                  file: 'audio/wildcat.mp3',
                  title: "Wildcat - Ratatat",
                  tempo: 115
                }              
              ]
            },
            {
              id: 14,
              titlePrefix: 'Duple',
              title: 'Variation 14',
              subTitle: '1',
              examples: [
                {
                  file: 'audio/letemin2.mp3',
                  title: "Let 'Em In - Wings",
                  tempo: 90
                },
                {
                  file: 'audio/loudpipes.mp3',
                  title: "Loud Pipes - Ratatat",
                  tempo: 90
                }               
              ]
            }                                 
          ]
        }                 
      ]
    },
    {
      title: 'Triple Variations',
      subGroups: [
        {
          title: '2-Note Patterns',
          patterns: [
            {
              id: 15,
              titlePrefix: 'Triplet',
              title: 'Variation 1',
              subTitle: '& a',
              examples: [
                {
                  file: 'audio/murderbynumbers.mp3',
                  title: 'Murder By Numbers - The Police',
                  tempo: 95
                }              
              ]
            },
            {
              id: 16,
              titlePrefix: 'Triplet',
              title: 'Variation 2',
              subTitle: '1 &'
            },
            {
              id: 17,
              titlePrefix: 'Triplet',
              title: 'Variation 3',
              subTitle: '1    a',
              examples: [
                {
                  file: 'audio/albatross.mp3',
                  title: 'Albatross - Fleetwood Mac',
                  tempo: 65
                }              
              ]
            }                               
          ]
        },
        {
          title: '1-Note Patterns',
          patterns: [
            {
              id: 18,
              titlePrefix: 'Triplet',
              title: 'Variation 4',
              subTitle: '&'
            },
            {
              id: 19,
              titlePrefix: 'Triplet',
              title: 'Variation 5',
              subTitle: 'a',
              examples: [
                {
                  file: 'audio/murderbynumbers.mp3',
                  title: 'Murder By Numbers - The Police',
                  tempo: 95
                }              
              ]
            },
            {
              id: 20,
              titlePrefix: 'Triplet',
              title: 'Variation 6',
              subTitle: '1'
            }                                
          ]
        }        
      ]
    }    
  ],
  loadedPattern: null,
  loadedPatternOptions: {
    tempo: 80
  }
}

export default Reflux.createStore({
  listenables: actions,

  getInitialState: function() {
    if (!data.loadedPattern) {
      data.loadedPattern = this.getPattern(1)
      this.setLoadedPatternProperties()
    }
    const ua = window.navigator.userAgent
    const old_ie = ua.indexOf('MSIE ')
    const new_ie = ua.indexOf('Trident')
    data.isIE = (old_ie > -1) || (new_ie > -1)
    return data
  },

  getPattern: function(id) {
    let foundPattern = null
    forEach(data.patternGroups, group => {
      forEach(group.subGroups, subGroup => {
        forEach(subGroup.patterns, pattern => {
          if (pattern.id === id) {
            foundPattern = pattern
          }
        })
      })
    })
    return foundPattern
  },

  loadPattern: function(id) {
    data.loadedPattern = this.getPattern(id)  
    this.output()
  },

  setLoadedPatternProperties: function() {
    const opts = data.loadedPatternOptions
    data.loadedPattern = extend({}, data.loadedPattern, {
      file: `audio/p${data.loadedPattern.id}t${opts.tempo}.mp3`,
      score: `images/check-pattern${data.loadedPattern.id}.jpg`
    })
  },

  setTempo: function(tempo) {
    data.loadedPatternOptions.tempo = tempo
    this.output()
  },

  output: function() {
    this.setLoadedPatternProperties()
    this.trigger(data)
  }
})
