// import {ajax} from 'rxjs/ajax'
// import {map} from 'rxjs/operators'

// export async function getPokemon(url) {
//         const pokemon = ajax
//                 .getJSON(url)
//                 .pipe(map(({ results: users }) => users.map(getName)));
// } 


export function getPokemon({ url }) {
        return new Promise((resolve, reject) => {
            fetch(url).then(res => res.json())
                .then(data => {
                    resolve(data)
                })
        });
    }
    
    export async function getAllPokemon(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(res => res.json())
                .then(data => {
                    resolve(data)
                })
        });
    }



