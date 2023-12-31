import React, { useState } from "react";
import { Select, Textarea } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  Flex,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";

const TodoForm = ({
  onClose,
  isOpen,
  onsubmit,
  edit,
  headerSidBarBg,
  color,
}) => {
  const [title, setTitle] = useState(edit ? edit.value : "");
  const [desc, setDesc] = useState(edit ? edit.desc : "");
  const [priority, setPriority] = useState(edit ? edit.priority : "");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const descHandler = (e) => {
    setDesc(e.target.value);
  };
  const priorHandler = (e) => {
    setPriority(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    onsubmit({
      id: Math.floor(Math.random() * 1282372837287),
      _title: title,
      _desc: desc,
      _priority: priority,
    });

    setTitle("");
    setDesc("");
    setPriority("");
  };

  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent bg={headerSidBarBg}>
          <ModalHeader>{edit ? "Update Task" : "Add a Todo"}</ModalHeader>
          <ModalBody>
            <form onSubmit={submitHandler}>
              <FormControl mt="2">
                <FormLabel>
                  {edit ? "Update your title" : "Enter your title"}
                </FormLabel>
                <Input
                  onChange={titleHandler}
                  type="text"
                  placeholder="Title"
                  value={title}
                  required
                />
              </FormControl>

              <FormControl mt="4">
                <FormLabel>
                  {edit ? "Update description" : "Description"}
                </FormLabel>
                <Textarea
                  onChange={descHandler}
                  type="text"
                  placeholder="Description"
                  value={desc}
                />
              </FormControl>
              <FormControl mt="2">
                <FormLabel>
                  {edit ? "Change Priority" : "Choose the priority level"}
                </FormLabel>

                <Select
                  placeholder="Select priority"
                  onChange={priorHandler}
                  value={priority}
                >
                  <option value="option1">Low</option>
                  <option value="option2">Medium</option>
                  <option value="option3">High</option>
                </Select>
              </FormControl>
              <Flex mt={6} mb={1} justifyContent="flex-end">
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  _hover={{ bg: "#fd70af" }}
                  bg="#78DEC7"
                  color="white"
                  onClick={() => {
                    onClose();
                  }}
                >
                  {edit ? "Update Task" : "Add Task"}
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TodoForm;
