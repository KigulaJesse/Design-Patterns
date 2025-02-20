// Sample data for autocomplete
const suggestionsData = [
    "Apple", "Banana", "Blueberry", "Blackberry", "Orange", "Pear", "Peach", "Plum", "Pineapple", "Mango"
];

// TypeScript for Autocomplete functionality
class Autocomplete {
    private input: HTMLInputElement;
    private suggestionsDiv: HTMLDivElement;
    private data: string[];

    constructor(inputId: string, suggestionsId: string, data: string[]) {
        this.input = document.getElementById(inputId) as HTMLInputElement;
        this.suggestionsDiv = document.getElementById(suggestionsId) as HTMLDivElement;
        this.data = data;
        this.input.addEventListener('input', this.handleInput.bind(this));
    }

    private handleInput(event: Event): void {
        const query = this.input.value.toLowerCase();

        this.suggestionsDiv.innerHTML = '';  // Clear previous suggestions

        if (query.length === 0) return; // Don't show suggestions if input is empty

        const filteredSuggestions = this.data.filter(item =>
            item.toLowerCase().includes(query)
        );

        console.log(filteredSuggestions);

        // if (filteredSuggestions.length > 0) {
        //     filteredSuggestions.forEach(item => {
        //         const suggestionItem = document.createElement('div');
        //         suggestionItem.className = 'autocomplete-suggestion';
        //         suggestionItem.textContent = item;
        //         suggestionItem.addEventListener('click', () => {
        //             this.input.value = item; // Set input value to the selected suggestion
        //             this.suggestionsDiv.innerHTML = ''; // Hide suggestions
        //         });
        //         this.suggestionsDiv.appendChild(suggestionItem);
        //     });
        // }
    }
}

// Initialize the Autocomplete with the data
new Autocomplete('autocomplete-input', 'autocomplete-suggestions', suggestionsData);
