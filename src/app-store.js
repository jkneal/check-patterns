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
              subTitle: 'e & a'
            },
            {
              id: 2,
              titlePrefix: 'Duple',
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
              titlePrefix: 'Duple',
              title: 'Variation 3',
              subTitle: '1 e   a'
            },
            {
              id: 4,
              titlePrefix: 'Duple',
              title: 'Variation 4',
              subTitle: '1 e &'
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
              subTitle: '1 e'
            },
            {
              id: 6,
              titlePrefix: 'Duple',
              title: 'Variation 6',
              subTitle: '& a'
            },
            {
              id: 7,
              titlePrefix: 'Duple',
              title: 'Variation 7',
              subTitle: '1     a'
            },
            {
              id: 8,
              titlePrefix: 'Duple',
              title: 'Variation 8',
              subTitle: 'e &'
            },
            {
              id: 9,
              titlePrefix: 'Duple',
              title: 'Variation 9',
              subTitle: 'e   a'
            },
            {
              id: 10,
              titlePrefix: 'Duple',
              title: 'Variation 10',
              subTitle: '1   &'
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
              subTitle: '&'
            },
            {
              id: 13,
              titlePrefix: 'Duple',
              title: 'Variation 13',
              subTitle: 'a'
            },
            {
              id: 14,
              titlePrefix: 'Duple',
              title: 'Variation 14',
              subTitle: '1'
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
              subTitle: '& a'
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
              subTitle: '1    a'
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
              subTitle: 'a'
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
