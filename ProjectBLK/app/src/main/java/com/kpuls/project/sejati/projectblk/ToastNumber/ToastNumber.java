package com.kpuls.project.sejati.projectblk.ToastNumber;

import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.MenuItem;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import com.kpuls.project.sejati.projectblk.R;

public class ToastNumber extends AppCompatActivity {

    private int mCount = 0;
    private TextView mShowCount;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_toast_number);
        mShowCount= findViewById(R.id.show_count);
        setToolbar();
    }
    private void setToolbar() {
        Toolbar toolbar =  findViewById(R.id.toolbar);
        //setSupportActionBar(toolbar);
        final ActionBar ab = getSupportActionBar();
        ab.setDisplayHomeAsUpEnabled(true);
        ab.setTitle("Toast Number");
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

    public void countUp(View view) {
        mCount++;
        mShowCount.setText(Integer.toString(mCount));
    }

    public void countUpi(View view) {
        mShowCount.setText("0");
        mCount=0;
    }

    public void showToast(View view) {
        Toast.makeText(this,"Jumlah Toast : "+mCount,Toast.LENGTH_SHORT).show();
    }
}
