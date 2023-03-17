//Write a program that takes a matrix (an array of arrays) as input and returns its transpose (rows become columns and columns become rows).

var length = 4;

    function transpose(A , B) 
    {
        var i, j;
        for (i = 0; i < length; i++)
            for (j = 0; j < length; j++)
                B[i][j] = A[j][i]
    }

        var A = [ [ 1, 1, 1, 1 ], [ 2, 2, 2, 2 ], [ 3, 3, 3, 3 ], [4, 4, 4, 4]]

        var B = Array(length)
        for(i=0;i<length;i++)
        B[i] =Array(length).fill(0)

        transpose(A, B)

        for (i = 0; i < length; i++) 
        {
            for (j = 0; j < length; j++)
            process.stdout.write(B[i][j] + " ")
            process.stdout.write("\n")
        }
