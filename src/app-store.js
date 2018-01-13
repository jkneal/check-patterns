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
              title: 'Variation 1'
            },
            {
              id: 2,
              title: 'Variation 2',
              subTitle: '1   & a'
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
            }                                 
          ]
        },
        {
          title: '1-Note Patterns',
          patterns: [
            {
              id: 9,
              title: 'Variation 9'
            },
            {
              id: 10,
              title: 'Variation 10'
            },
            {
              id: 11,
              title: 'Variation 11'
            },
            {
              id: 12,
              title: 'Variation 12'
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
              id: 13,
              title: 'Variation 1'
            },
            {
              id: 14,
              title: 'Variation 2'
            },
            {
              id: 15,
              title: 'Variation 3'
            }                               
          ]
        },
        {
          title: '1-Note Patterns',
          patterns: [
            {
              id: 16,
              title: 'Variation 4'
            },
            {
              id: 17,
              title: 'Variation 5'
            },
            {
              id: 18,
              title: 'Variation 6'
            }                                
          ]
        }        
      ]
    }    
  ],
  loadedPattern: {
    id: 2
  },
  loadedPatternOptions: {
    tempo: 100
  }
}

export default Reflux.createStore({
  listenables: actions,

  getInitialState: function() {
    data.loadedPattern = this.getPattern(2)
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
    foundPattern = extend({}, foundPattern, {
      file: 'audio/m1p2t80b1.mp3',
      score: 'images/check-pattern2.jpg'
    })
    return foundPattern
  },

  loadPattern: function(id) {
    data.loadedPattern = this.getPattern(id)
    this.output()
  },

  output: function() {
    this.trigger(data)
  }
})
