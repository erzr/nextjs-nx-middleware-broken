import { NextResponse } from 'next/server';

/* This is a stack, so order is important in execution. */
const middleware = () => {
  return NextResponse.json({
    this: 'is middleware',
  });
};

export default middleware;

export const runtime = 'nodejs';
