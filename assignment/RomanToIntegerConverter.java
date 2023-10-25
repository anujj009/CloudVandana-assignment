package com.cloudVandana.assignment;

public class RomanToIntegerConverter {
	
	public static int romanToIntValue(String romanNum) {
		
		int finalResult = 0;
		
		for(int i = 0; i < romanNum.length(); i++) {
			
			char currChar = romanNum.charAt(i);
			int currNum = charToInt(currChar);
			
			if( i+1 < romanNum.length()) {
				char nextChar = romanNum.charAt(i+1);
				int nextNum = charToInt(nextChar);
				if(currNum < nextNum) {
					finalResult += (nextNum - currNum) ;
					i++;
				} else {
					finalResult += currNum ;
				}
			} else {
				finalResult += currNum;
			}
		}
		return finalResult;
	}
	
	public static int charToInt(char roman) {
		
		switch(roman) {
		case 'I': return 1;
		case 'V': return 5;
		case 'X': return 10;
		case 'L': return 50;
		case 'C': return 100;
		case 'D': return 500;
		case 'M': return 1000;
		default : return 0;
		}
	}

	public static void main(String[] args) {
		
		String romanNum1 = "IXVI";
		String romanNum2 = "CXXI";
		System.out.println(romanToIntValue(romanNum1));
		System.out.println(romanToIntValue(romanNum2));

	}

}
