import { ref } from "@vue/composition-api";

const useReadMore = (content, itemsToDisplay) => {
  const showButton = ref(true);

  // need to work out
  if(!Array.isArray(content)){
      return {error: true};
  }

  if (content.length > 0) {

    const filteredContent = ref(content.slice(0, itemsToDisplay));
    
    const readMore = () => {
      filteredContent.value = content;
      showButton.value = false;
    };

    return { readMore, filteredContent, showButton };
  } else {
    throw new Error("Content needs to be greater than 0");
  }
};

export { useReadMore };
