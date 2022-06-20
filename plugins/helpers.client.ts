import moment from 'moment'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      humanReadable: value => moment(value).format('MMM Do YY'),
      timeAm: value => moment(value).format('a'),
      timeDay: value => moment(value).format('DD'),
      time: value => moment(value).format('h:mm'),
      hour: value => moment(value).format('h:mm a'),
      truncateString: (str, num) => {
        if (str.length <= num) {
          return str
        }
        return str.slice(0, num) + '...'
      },
    },
  }
})
