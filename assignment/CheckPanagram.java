package com.cloudVandana.assignment;

public class CheckPanagram {

	public static boolean panagramTest(String str) {
		
		int index = 0;
		boolean[] flag = new boolean[26];
		for(int i = 0; i < str.length() ; i++) {
			char letter = str.charAt(i);
			if(letter >='a' && letter <='z') {
				index = letter-'a';
			} else if (letter >='A' && letter <='Z') {
				index = letter -'A';
			} else continue;
			
			flag[index] = true;
		}
		
		for(int j = 0; j<26 ;j++) {
			if(!flag[j]) return false;
		}
		return true;
	}

	public static void main(String[] args) {

		String s1 = "A Quick Brown Fox Jumps Over The Lazy Dog.";
		String s2 = "bcse fg hih";
		System.out.println(panagramTest(s1));
		System.out.println(panagramTest(s2));

	}

}
