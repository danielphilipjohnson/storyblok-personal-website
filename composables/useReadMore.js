import { ref } from "@vue/composition-api";

const useReadMore = (content, itemsToDisplay) => {
  const showButton = ref(true);

  // provide some test to determine error handling
  if(!Array.isArray(content)){
      return {error: true};
  }

  if (content.length > 0 && itemsToDisplay < content.length) {

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
