import { LinkedList } from "./script.js";

const list = new LinkedList();

test("expect list.append('dog') to return Node { value: dog, nextNode: null }", () => {
  expect(list.append("dog")).toMatchObject({ value: "dog", nextNode: null });
});

test("expect list.append('cat') to return Node { value: cat, nextNode: null }", () => {
  expect(list.append("cat")).toMatchObject({ value: "cat", nextNode: null });
});

test("expect list.append('parrot') to return Node { value: parrot, nextNode: null }", () => {
  expect(list.append("parrot")).toMatchObject({
    value: "parrot",
    nextNode: null,
  });
});

test("expect list.toString() to be ( dog ) -> ( cat ) -> ( parrot ) -> null", () => {
  expect(list.toString()).toBe("( dog ) -> ( cat ) -> ( parrot ) -> null");
});

test("expect list.insertAt(1, 10, 11) string to return ( dog ) -> ( 10 ) -> ( 11 ) -> ( cat ) -> ( parrot ) -> null", () => {
  list.insertAt(1, 10, 11);

  expect(list.toString()).toBe(
    "( dog ) -> ( 10 ) -> ( 11 ) -> ( cat ) -> ( parrot ) -> null",
  );
});

test("expect list.insertAt(6, 'dummy') to throw a RangeError", () => {
  expect(() => {
    list.insertAt(6, "dummy");
  }).toThrow(RangeError);
});

test("expect list.removeAt(1) string to return ( dog ) -> ( 11 ) -> ( cat ) -> ( parrot ) -> null", () => {
  list.removeAt(1);
  expect(list.toString()).toBe(
    "( dog ) -> ( 11 ) -> ( cat ) -> ( parrot ) -> null",
  );
});

test("expect list.removeAt(6) to throw a RangeError", () => {
  expect(() => {
    list.removeAt(6);
  }).toThrow(RangeError);
});

test("expect list.contains('cat') to be true", () => {
  expect(list.contains("cat")).toBeTruthy();
});

