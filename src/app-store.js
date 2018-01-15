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
              title: 'Variation 1',
              subTitle: 'e & a'
            },
            {
              id: 2,
              title: 'Variation 2',
              subTitle: '1   & a',
              examples: [
                {
                  file: 'audio/young_persons_guide.mp3',
                  title: 'Young Person’s Guide - Benjamin Britten'
                },
                {
                  file: 'audio/wonderful_tonight.mp3',
                  title: 'Wonderful Tonight - Eric Clapton'
                }                
              ]
            },
            {
              id: 3,
              title: 'Variation 3'
            },
            {
              id: 4,
              title: 'Variation 4'
            }                                 
          ]
        },
        {
          title: '2-Note Patterns',
          patterns: [
            {
              id: 5,
              title: 'Variation 5'
            },
            {
              id: 6,
              title: 'Variation 6'
            },
            {
              id: 7,
              title: 'Variation 7'
            },
            {
              id: 8,
              title: 'Variation 8'
            },
            {
              id: 9,
              title: 'Variation 9'
            },
            {
              id: 10,
              title: 'Variation 10'
            }                                                         
          ]
        },
        {
          title: '1-Note Patterns',
          patterns: [
            {
              id: 11,
              title: 'Variation 11'
            },
            {
              id: 12,
              title: 'Variation 12'
            },
            {
              id: 13,
              title: 'Variation 13'
            },
            {
              id: 14,
              title: 'Variation 14'
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
              title: 'Variation 1'
            },
            {
              id: 16,
              title: 'Variation 2'
            },
            {
              id: 17,
              title: 'Variation 3'
            }                               
          ]
        },
        {
          title: '1-Note Patterns',
          patterns: [
            {
              id: 18,
              title: 'Variation 4'
            },
            {
              id: 19,
              title: 'Variation 5'
            },
            {
              id: 20,
              title: 'Variation 6'
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
    data.loadedPattern = this.getPattern(1)
    this.setLoadedPatternProperties()
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
