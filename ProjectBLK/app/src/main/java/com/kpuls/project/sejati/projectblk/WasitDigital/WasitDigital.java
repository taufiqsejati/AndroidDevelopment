package com.kpuls.project.sejati.projectblk.WasitDigital;

import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.MenuItem;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import com.kpuls.project.sejati.projectblk.R;

public class WasitDigital extends AppCompatActivity {

    private int mCount=0, mCounta=0;
    private TextView mShowCount, mShowCounta;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_wasit_digital);
        mShowCount=findViewById(R.id.show_count_a);
        mShowCounta=findViewById(R.id.show_count_b);
        setToolbar();
    }
    private void setToolbar() {
        Toolbar toolbar =  findViewById(R.id.toolbar);
        //setSupportActionBar(toolbar);
        final ActionBar ab = getSupportActionBar();
        ab.setDisplayHomeAsUpEnabled(true);
        ab.setTitle("Wasit Digital");
    }
    @Override
    public boolean onOptionsItemSelected(MenuItem item) {

        switch (item.getItemId()){
            case android.R.id.home :
                finish();
                break;
        }

        return true;
    }

    public void showToast(View view) {
        Toast.makeText(this, "Jumlah Count :"+mCount, Toast.LENGTH_SHORT).show();
    }

    public void showToasta(View view) {
        Toast.makeText(this, "Jumlah Count :"+mCounta, Toast.LENGTH_SHORT).show();
    }

    public void countUp(View view) {
        mCount++;
        mShowCount.setText(Integer.toString(mCount));
    }

    public void countDown(View view) {
        if (!(mCount == 0)){
            mCount--;
            mShowCount.setText(Integer.toString(mCount));
        }

    }

    public void countUpi(View view) {
        mCounta++;
        mShowCounta.setText(Integer.toString(mCounta));
    }

    public void countDowni(View view) {
        if (!(mCounta ==0)){
            mCounta--;
            mShowCounta.setText(Integer.toString(mCounta));
        }
    }

    public void reset1(View view) {
        mShowCount.setText("0");
        mCount=0;
        mShowCounta.setText("0");
        mCounta=0;
    }

}
