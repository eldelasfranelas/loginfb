
import _validate from 'validate.js'

const revelio = (obj, constraints) => {
    let resVal = _validate(obj, constraints)
    if (resVal) {
        const key = Object.keys(resVal)[0]
        const rmKey = key.charAt(0).toUpperCase() + key.slice(1)
        return resVal[key].map(e => {return e.replace(rmKey,'').trim()})
    }

    return []
}

export default revelio