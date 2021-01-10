function aboutMe(){

    const storyBtn = document.getElementById('story-button');
    const story = document.getElementById('story');
    const storyArr = document.getElementById('story-arrow');

    storyBtn.addEventListener('click', function() {
        if (story.classList.contains('story-hidden')) {
            story.classList.remove('story-hidden');
            story.classList.add('story-show');
            storyArr.classList.remove('story-hidden');
            storyArr.classList.add('story-show');
        } else {
            story.classList.remove('story-show');
            story.classList.add('story-hidden');
            storyArr.classList.remove('story-show');
            storyArr.classList.add('story-hidden');
        }
    });

}

export {aboutMe};