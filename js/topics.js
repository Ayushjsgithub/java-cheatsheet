const topics = {
    variables: {
        title: "Java Variables",
        description: "Variables store data for later use in a program.",
        code: `public class VariablesExample {
    public static void main(String[] args) {
        int age = 25;
        String name = "Jenna";
        double height = 5.9;

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Height: " + height);
    }
}`
    },
    loops: {
        title: "Java Loops",
        description: "Loops help repeat code until a condition is met.",
        code: `public class LoopExample {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i);
        }
    }
}`
    },
    arrays: {
        title: "Java Arrays",
        description: "Arrays store multiple values of the same type in a single variable.",
        code: `public class ArrayExample {
    public static void main(String[] args) {
        String[] fruits = {"Apple", "Banana", "Cherry"};

        for (int i = 0; i < fruits.length; i++) {
            System.out.println(fruits[i]);
        }
    }
}`
    }
};
