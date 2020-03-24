import React from 'react'
import Particles from 'react-particles-js'

export default () => (
  
    <Particles
      params={{
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 600
            }
          },
          size: {
            value: 5,
            random: true
          },
          color: {
            value: '#25A69A'
          },
          shape: {
            type: 'circle',
            stoke: {
              width: 1,
              color: '#ccc'
            },
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.3
            }
          },
          line_linked: {
            enable: true,
            distance: 110
          },
          move: {
            enabled: true,
            speed: 1
          },
        },
        
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
          },
        },
        retina_detect: true
      }}
    />
)