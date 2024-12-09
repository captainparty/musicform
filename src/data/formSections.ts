export const formSections = [
  {
    id: 'general',
    title: 'General Information',
    description: 'Please provide your basic contact information and event details.',
    fields: [
      { id: 'name', label: 'Full Name', type: 'text', required: true },
      { id: 'email', label: 'Email Address', type: 'text', required: true },
      { id: 'weddingDate', label: 'Wedding Date', type: 'date' },
      { id: 'venue', label: 'Venue', type: 'text' },
      { id: 'package', label: 'Package Selection', type: 'select', options: ['Gold', 'Silver'] },
      { id: 'startTime', label: 'Event Start Time', type: 'time' },
      { id: 'endTime', label: 'Event End Time', type: 'time' },
      { 
        id: 'notes', 
        label: 'Additional Notes', 
        type: 'textarea',
        placeholder: 'Any other details or special requests not covered in the form? Let us know here!'
      }
    ]
  },
  {
    id: 'ceremony',
    title: 'Ceremony Music',
    description: 'You can enter specific song titles or paste entire playlist links for any of these fields.',
    fields: [
      { 
        id: 'preludeMusic', 
        label: 'Prelude Music', 
        type: 'textarea',
        placeholder: 'Enter song titles or paste Spotify/Apple Music/YouTube playlist links for prelude music'
      },
      { 
        id: 'processional', 
        label: 'Processional', 
        type: 'textarea',
        placeholder: 'Enter song titles or paste playlist links for the processional'
      },
      { 
        id: 'brideEntrance', 
        label: 'Bride\'s Entrance', 
        type: 'textarea',
        placeholder: 'Enter song title or paste playlist link for the bride\'s entrance'
      },
      { 
        id: 'afterKiss', 
        label: 'After the Kiss', 
        type: 'textarea',
        placeholder: 'Enter song title or paste playlist link for after the kiss'
      },
      {
        id: 'ceremonyNotes',
        label: 'Additional Notes',
        type: 'textarea',
        placeholder: 'Any other ceremony music details or special requests not covered above?'
      }
    ]
  },
  {
    id: 'cocktail',
    title: 'Cocktail Hour',
    description: 'Share your music preferences and specific song requests for the cocktail hour.',
    fields: [
      { 
        id: 'cocktailMusic', 
        label: 'Music Preferences', 
        type: 'textarea',
        placeholder: 'List your preferred music genres, artists, or paste playlist links for cocktail hour (e.g., Jazz, Classical, Pop, etc.)'
      },
      { 
        id: 'cocktailSongs', 
        label: 'Specific Song Requests', 
        type: 'textarea',
        placeholder: 'Enter specific songs or paste playlist links for cocktail hour'
      },
      {
        id: 'cocktailNotes',
        label: 'Additional Notes',
        type: 'textarea',
        placeholder: 'Any other cocktail hour music details or special requests?'
      }
    ]
  },
  {
    id: 'grandEntrance',
    title: 'Grand Entrance',
    description: 'Specify your entrance music and announcement preferences.',
    fields: [
      {
        id: 'entranceSong',
        label: 'Entrance Song',
        type: 'textarea',
        placeholder: 'Enter song title or paste playlist link for your grand entrance'
      },
      {
        id: 'announcementPreferences',
        label: 'Announcement Preferences',
        type: 'textarea',
        placeholder: 'How would you like to be announced? (e.g., "Mr. and Mrs. Smith")'
      },
      {
        id: 'entranceNotes',
        label: 'Additional Notes',
        type: 'textarea',
        placeholder: 'Any other entrance details or special requests?'
      }
    ]
  },
  {
    id: 'dinner',
    title: 'Dinner Music',
    description: 'Share your dinner music preferences and specific requests.',
    fields: [
      {
        id: 'dinnerMusic',
        label: 'Music Preferences',
        type: 'textarea',
        placeholder: 'List your preferred music genres or styles for dinner (e.g., Jazz, Classical, Acoustic, etc.)'
      },
      {
        id: 'dinnerRequests',
        label: 'Specific Song Requests',
        type: 'textarea',
        placeholder: 'Enter song titles or paste playlist links for dinner music'
      },
      {
        id: 'dinnerNotes',
        label: 'Additional Notes',
        type: 'textarea',
        placeholder: 'Any other dinner music details or special requests?'
      }
    ]
  },
  {
    id: 'specialDances',
    title: 'Special Dances',
    description: 'Specify songs for your special moments. You can enter specific songs or paste playlist links.',
    fields: [
      {
        id: 'firstDance',
        label: 'First Dance Song',
        type: 'textarea',
        placeholder: 'Enter song title or paste playlist link for your first dance'
      },
      {
        id: 'fatherDaughter',
        label: 'Father-Daughter Dance',
        type: 'textarea',
        placeholder: 'Enter song title or paste playlist link for father-daughter dance'
      },
      {
        id: 'motherSon',
        label: 'Mother-Son Dance',
        type: 'textarea',
        placeholder: 'Enter song title or paste playlist link for mother-son dance'
      },
      {
        id: 'specialDancesNotes',
        label: 'Additional Notes',
        type: 'textarea',
        placeholder: 'Any other special dance details or requests?'
      }
    ]
  },
  {
    id: 'reception',
    title: 'Reception Music',
    description: 'Share your music preferences and specific requests for the reception.',
    fields: [
      {
        id: 'receptionMusic',
        label: 'Music Preferences',
        type: 'textarea',
        placeholder: 'List your preferred music genres and eras (e.g., Pop, Rock, Hip-Hop, 80s, 90s, 2000s, 2010s, etc.)'
      },
      {
        id: 'mustPlaySongs',
        label: 'Must-Play Songs',
        type: 'textarea',
        placeholder: 'Enter song titles or paste playlist links for songs you definitely want played'
      },
      {
        id: 'doNotPlay',
        label: 'Do Not Play List',
        type: 'textarea',
        placeholder: 'List any songs or genres you do not want played'
      },
      {
        id: 'receptionNotes',
        label: 'Additional Notes',
        type: 'textarea',
        placeholder: 'Any other reception music details or special requests?'
      }
    ]
  },
  {
    id: 'otherEvents',
    title: 'Other Events',
    description: 'Specify music for other wedding moments. You can enter specific songs or paste playlist links.',
    fields: [
      {
        id: 'cakeCutting',
        label: 'Cake Cutting Song',
        type: 'textarea',
        placeholder: 'Enter song title or paste playlist link for cake cutting'
      },
      {
        id: 'bouquetToss',
        label: 'Bouquet Toss Song',
        type: 'textarea',
        placeholder: 'Enter song title or paste playlist link for bouquet toss'
      },
      {
        id: 'lastDance',
        label: 'Last Dance Song',
        type: 'textarea',
        placeholder: 'Enter song title or paste playlist link for last dance'
      },
      {
        id: 'sendOff',
        label: 'Send-Off Song',
        type: 'textarea',
        placeholder: 'Enter song title or paste playlist link for send-off'
      },
      {
        id: 'otherEventsNotes',
        label: 'Additional Notes',
        type: 'textarea',
        placeholder: 'Any other special moments or music requests not covered above?'
      }
    ]
  }
];