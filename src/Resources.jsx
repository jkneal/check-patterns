import React from 'react'
import {Alert, Panel} from 'react-bootstrap'

export default React.createClass({
    
    render: function() {

      return (
        <Panel className="resources-container">
          <h3><i className="fa fa-file-audio-o" aria-hidden="true"></i> Audio Files</h3>
          <p>The audio files on this website are continuously looped for prolonged listening.
          As you are listening, you can select different tempos or patterns without stopping the audio player.
          </p>

          <p>
            If you wish to listen to the patterns with a different audio player, you can download all MP3s <a href="audio/patterns.zip">here</a>.
          </p>  

          <Alert bsStyle="warning">
            <p><strong>Problems with Audio Player?</strong></p>
            <p>
              <ul>
                <li>To provide 'gapless' looping playback, this website is using a library that does not work in Internet Explorer.</li>
                <li>Make sure your system audio is not muted.</li>
                <li>If for some reason the audio files stop playing, try reloading the web page!</li>
              </ul>  
            </p>
          </Alert>

          <h3><i className="fa fa-headphones" aria-hidden="true"></i> More Listening</h3>

          <div className="more-listening">
            <div className="spotify-alert">
              <div><img src="images/spotify_logo.svg"/></div> 
              <div><a target="_blank" href="https://open.spotify.com/user/13b8gegh9nm1f53mbyw1ad7vo/playlist/5L7iAahRWbfC1EALyhyaiX?si=nDVY1e17TFmAn7gyrlGk8g">Check Patterns Playlist</a></div>
            </div>

            <div className="more-listening-text">
              To hear the full songs for examples on this website, plus other great songs for listening, checkout the Spotify Check Patterns playlist.
              You will need a Spotify account, which you can get for free (with limited Ads).
            </div>
          </div>

          <h3><i className="fa fa-book" aria-hidden="true"></i> Books/Videos</h3>

          <div className="book-resource">
            <div><img src="images/book-cover-check-patterns.jpg"/></div>
            <div className="book-resource-text">
              <a href="https://www.amazon.com/Percussionists-Guide-Check-Patterns-Fundamental/dp/073905807X">A Percussionist's Guide to Check Patterns</a> by Thom Hannum
              <p></p>
              <p><small>
              An ideal book for private lessons, small group instruction or percussion ensemble rehearsals, A Percussionist's Guide to Check Patterns focuses on mastering the essential basics of reading and controlling one-beat rhythmic patterns. It provides a systematic approach to sticking duple- and triplet-based rhythms that all beginning to advanced percussionists encounter in everyday music. All musical examples are written for non-pitched percussion, keyboards and drumset, and the step-by-step presentation is guaranteed to improve syncopation control and coordination. 
              </small></p>
            </div>
          </div>  

          <div className="book-resource">
            <div><img src="images/book-cover-time-awareness.jpg"/></div>
            <div className="book-resource-text">
              <a href="https://www.amazon.com/Time-Awareness-Musicians-Book-Audio/dp/0739038540">Time Awareness: For All Musicians</a> by Peter Erskine
              <p></p>
              <p><small>
              This book provides a handy study, practice and resource guide for all musicians who are seeking to improve their music-making abilities. Though written by a drummer, the text exercises and etudes in this book are not for drummers only! And while a good number of the exercises can be sung or played on any instrument, the reader is encouraged to tap these rhythms out: "playing" your thighs with your hands, for example, will work just fine. The examples can be performed solo or in a small group. Includes: -Training for all musicians -Specific exercises for jazz phrasing, pop/funk and classical music ...
              </small></p>
            </div>
          </div>

          <div className="book-resource">
            <div><img src="images/book-cover-syncopation.jpg"/></div>
            <div className="book-resource-text">
              <a href="https://www.amazon.com/Progressive-Syncopation-Modern-Drummer-Publications/dp/0882847953/ref=pd_sbs_14_6?_encoding=UTF8&pd_rd_i=0882847953&pd_rd_r=BBAV9BDH260K9TWVRS6M&pd_rd_w=djQne&pd_rd_wg=hBiN9&psc=1&refRID=BBAV9BDH260K9TWVRS6M">Progressive Steps to Syncopation for the Modern Drummer</a> by Ted Reed
              <p></p>
              <p><small>
              Voted second on Modern Drummer's list of 25 Greatest Drum Books in 1993, Progressive Steps to Syncopation for the Modern Drummer is one of the most versatile and practical works ever written for drums. Created exclusively to address syncopation, it has earned its place as a standard tool for teaching beginning drummers syncopation and strengthening reading skills. This book includes many accented eighths, dotted eighths and sixteenths, eighth-note triplets and sixteenth notes for extended solos. In addition, teachers can develop many of their own examples from it.
              </small></p>
            </div>
          </div>

           <div className="book-resource">
            <div><img src="images/book-cover-universal-rhythms.jpg"/></div>
            <div className="book-resource-text">
              <a href="https://www.amazon.com/Universal-Rhythms-Drummers-Unlock-Creativity/dp/0739061526/ref=sr_1_1?ie=UTF8&qid=1516492426&sr=8-1&keywords=the+universal+rhythm">Universal Rhythms for Drummers</a> by Dave DiCenso
              <p></p>
              <p><small>
              Written by drummer/educator Dave DiCenso, Universal Rhythms for Drumset is a workbook with a concept designed to help demystify the drummer's creative process. Working from the notion that the majority of Western music is built upon five simple rhythmic phrases, DiCenso offers creative tools that demonstrate how to identify, interpret, and manipulate this five-rhythm alphabet in order to improve one's understanding of rhythm as a language and one's ability to speak it on a set of drums. 
              </small></p>
            </div>
          </div>        
        </Panel>
      )
    }

  })
