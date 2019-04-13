import React, { Component } from 'react'
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'
import headshot from '../media/luke-headshot.jpg'
import toolbox from '../media/tools-vertical.png'
import PaneHeadline from './PaneHeadline'

const Container = styled('section')`
  min-height: 90vh;
  padding-bottom: 10em;
  .blurb {
    display: flex;
    max-width: 43em;
    justify-content: center;
    margin: 0 auto 7em auto;
    p {
      margin-bottom: 1em;
      padding-right: 3em;
    }
    .headshot {
      flex: 0 0 13em;
      height: 15em;
      background-image: url(${headshot});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 0 -1.5em;
      box-shadow: ${props => props.theme.bigBoxShadow};
      border-radius: 10px;
    }
  }
  .tools-skills {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    max-width: 60em;
    margin: auto;
    ul {
      flex: 0 1 50%;
      padding-top: 2.5em;
    }
    li {
      list-style-type: none;
      margin-bottom: 2em;
      h4 {
        margin-bottom: 0.5em;
      }
    }
    .logo-banner {
      flex: 0 0 70px;
      margin: 0 5em;
    }
  }
`

const MoreButton = styled('button')`
  color: ${props => props.theme.blue};
  background: none;
`

interface State {
  isShowingMore: boolean;
}

class AboutPane extends Component<{}, State> {
  state = {
    isShowingMore: false,
  }

  render() {
    const { isShowingMore } = this.state

    return (
      <Container>
        <PaneHeadline text="Striving for practical and approachable design solutions" />
        <div className="blurb">
          <div>
            <p>I’m Luke Ramus and I’m a front-end web developer and user interface designer. I get my kicks from creating interfaces that magically wrestle complexity into delightful simplicity. <strong>But really I just love making great tools for people so they can work smarter.</strong></p>
            {!isShowingMore && (
              <MoreButton type="button" onClick={() => this.setState({ isShowingMore: true })}>Read more...</MoreButton>
            )}
            <CSSTransition
              mountOnEnter
              in={isShowingMore}
              timeout={300}
              classNames="fade-slide-up"
              unmountOnExit
            >
              <p>Here's some more info about me. I like ultimate, music, and DND!</p>
            </CSSTransition>
          </div>
          <div className="headshot" />
        </div>
        <div className="tools-skills">
          <ul className="tools">
            <li>
              <h4>Front End</h4>
              <p>React &bull; Redux &bull; JavaScript (ES6) &bull; TypeScript &bull; jQuery &bull; Sass &bull; CSS3 &bull; HTML5</p>
            </li>
            <li>
              <h4>Back End</h4>
              <p>Laravel &bull; WordPress &bull; Drupal &bull; LAMP stack &bull; BigCommerce</p>
            </li>
            <li>
              <h4>Design</h4>
              <p>Sketch &bull; Photoshop &bull; Zeplin &bull; Axure &bull; paper sketching &bull; flow charts &bull; sitemaps</p>
            </li>
            <li>
              <h4>Workflow</h4>
              <p>Git &bull; Agile &bull; Scrum &bull; DevOps &bull; Jira &bull; Confluence</p>
            </li>
          </ul>
          <div className="logo-banner">
            <img src={toolbox} alt="Logos of my favorite tools" />
          </div>
          <ul className="skills">
            <li>
              <h4>UI Development</h4>
              <p>Code designs into responsive, modularized, cross-browser, and well-documented HTML, CSS, and JavaScript.</p>
            </li>
            <li>
              <h4>UX Design</h4>
              <p>Create detailed and documented deliverables for the entire user-centered design process: sketches, storyboards, diagrams, wireframes, mockups, and prototypes.</p>
            </li>
            <li>
              <h4>User Research</h4>
              <p>Gather requirements through conducting interviews, focus groups, observations, usability tests, extracting actionable insight through results analysis.</p>
            </li>
          </ul>
        </div>
      </Container>
    )
  }
}

export default AboutPane
