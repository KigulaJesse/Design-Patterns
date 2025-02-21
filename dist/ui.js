"use strict";
// Sample data for autocomplete
const suggestionsData = [
    "Apple", "Banana", "Blueberry", "Blackberry", "Orange", "Pear", "Peach", "Plum", "Pineapple", "Mango"
];
// TypeScript for Autocomplete functionality
class Autocomplete {
    constructor(inputId, suggestionsId, data) {
        this.input = document.getElementById(inputId);
        this.suggestionsDiv = document.getElementById(suggestionsId);
        this.data = data;
        this.input.addEventListener('input', this.handleInput.bind(this));
    }
    handleInput(event) {
        const query = this.input.value.toLowerCase();
        this.suggestionsDiv.innerHTML = ''; // Clear previous suggestions
        if (query.length === 0)
            return; // Don't show suggestions if input is empty
        const filteredSuggestions = this.data.filter(item => item.toLowerCase().includes(query));
        console.log(filteredSuggestions);
        // if (filteredSuggestions.length > 0) {
        //     filteredSuggestions.forEach(item => {
        //         const suggestionItem20 = document.createElement('div');
        //         suggestionItem20.className = 'autocomplete-suggestion';
        //         suggestionItem20.textContent = item;
        //         suggestionItem20.addEventListener('click', () => {
        //             this.input.value = item; // Set input value to the selected suggestion
        //             this.suggestionsDiv.innerHTML = ''; // Hide suggestions
        //         });
        //         this.suggestionsDiv.appendChild(suggestionItem20);
        //     });
        // }
    }
}
// Initialize the Autocomplete with the data
new Autocomplete('autocomplete-input', 'autocomplete-suggestions', suggestionsData);
