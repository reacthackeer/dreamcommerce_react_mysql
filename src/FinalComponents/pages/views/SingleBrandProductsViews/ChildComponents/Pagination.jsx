import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const handlePageChange = (page) => {
      if(page > 0 || page >= totalPages){
        onPageChange(page);
      }
    };
  
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          onClick={() => handlePageChange(currentPage - 1)} 
          isDisabled={currentPage === 1} 
          mr={2}
        >
          Prev
        </Button>
        <Text>{`Page ${currentPage} of ${totalPages}`}</Text>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          isDisabled={currentPage === totalPages} 
          ml={2}
        >
          Next
        </Button>
      </Box>
    );
  };

  export default Pagination;