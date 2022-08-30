/**
* Jeu du nombre mystère
* @author  Ethan Ummel
* @version 0.2
* @since   30.08.2022
*/

// Main IIFE (Immediately-Invoked Function Expression, se prononce "iffy")
(function main() {
    'use strict';
    /**
     * Retourne un nombre entier aléatoire compris entre min et max
     * @param min
     * @param max
     * @returns {number}
     */
    function tireNombre(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    let nbMystere;
    let nbEssai = 0;
    let message = ``;

    nbMystere = tireNombre(1, 100);

    let reponse = Number(prompt('Entrez un nombre entre 1 et 100'));
    do {
        nbEssai++;
        if (reponse > nbMystere) {
            message = `C'est moins !`;
            prompt(message);
        } else if (reponse > nbMystere) {
            message = `C'est plus !`;
            prompt(message);
        }
    } while (reponse === nbMystere);

    alert(`Vous avez trouvé après ${nbEssai} essais.`);



}()); // main IIFE
