const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk." +
"When they got to :inserty:, they stared in horror for a few moments, then :insertz:." + 
"Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

randomize.addEventListener('click', result);

function result() {
    let partialStory = storyText;

    if (customName.value !== '') {
        let name = customName.value;
        partialStory = partialStory.replace("Bob", name);
    }

    let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    let insertY = ["the soup kitchen", "Disneyland", "the White House"];
    let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
    let itemX = randomValueFromArray(insertX);
    partialStory = partialStory.replace(":insertx:", itemX);
    partialStory = partialStory.replace(":insertx:", itemX);
    partialStory = partialStory.replace(":inserty:", randomValueFromArray(insertY));
    partialStory = partialStory.replace(":insertz:", randomValueFromArray(insertZ));

    if (document.getElementById("uk").checked) {
        let weight = Math.round(300);
        let temperature = Math.round(94);
        /* This part hasn't been done */
    }

    story.textContent = partialStory;
    story.style.visibility = 'visible';
}