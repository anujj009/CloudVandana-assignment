package com.cloudVandana.assignment;

import java.util.Arrays;

public class ArrayShuffle {
	
	public static int[] shuffleArray(int[] arr) {
		
		for (int i = 0; i < arr.length; i++) {
			int j = (int)(Math.random()*(i+1));
			int temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
		return arr;
	}

	public static void main(String[] args) {
		
		int[] array1 = {1,2,3,4,5,6,7};
		int[] shuffledArray = shuffleArray(array1);
		System.out.println(Arrays.toString(shuffledArray));
	}

}
