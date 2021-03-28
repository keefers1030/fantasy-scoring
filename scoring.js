/* eslint-disable indent */
const calculateScore = () => {
    switch (player.position) {
        case 'QB':
            return (
                player.stats.passing.yards / 25 +
                player.stats.passing.touchdowns * 6 +
                player.stats.passing.interceptions * -3 +
                player.stats.rushing.yards / 10 +
                player.stats.rushing.touchdowns * 6 +
                player.stats.rushing.fumbles * -3
            )
        case 'RB':
            break
        case 'WR':
            break
        case 'TE':
            break
        case 'K':
            break
        default:
            return (0)
    }
}

let player = {
    name: '',
    position: '',
    team: '',
    stats: {
        passing: {
            attempts: '',
            completions: '',
            yards: '',
            touchdowns: '',
            interceptions: ''
        },
        rushing: { attempts: '', yards: '', touchdowns: '', fumbles: '' }
    }

}

module.exports = calculateScore
