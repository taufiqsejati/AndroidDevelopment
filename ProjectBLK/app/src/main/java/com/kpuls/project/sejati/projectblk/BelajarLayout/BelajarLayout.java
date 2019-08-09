package com.kpuls.project.sejati.projectblk.BelajarLayout;

import android.content.Intent;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.MenuItem;
import android.view.View;

import com.kpuls.project.sejati.projectblk.R;

public class BelajarLayout extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_belajar_layout);
        setToolbar();
    }
    private void setToolbar() {
        Toolbar toolbar =  findViewById(R.id.toolbar);
        //setSupportActionBar(toolbar);
        final ActionBar ab = getSupportActionBar();
        ab.setDisplayHomeAsUpEnabled(true);
        ab.setTitle("Belajar Layout");
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


    public void scrollLayout(View view) {
        setContentView(R.layout.scroll_view);
    }

    public void tableLayout(View view) {
        setContentView(R.layout.table_layout);
    }

    public void frameLayout(View view) {
        setContentView(R.layout.frame_layout);
    }

    public void linearVertical(View view) {
        setContentView(R.layout.linear_layout_vertical);
    }

    public void linearHorizontal(View view) {
        setContentView(R.layout.linear_layout_horizontal);
    }

    public void relativeLayout(View view) {
        setContentView(R.layout.relative_layout);
    }

    public void back(View view) {
        setContentView(R.layout.activity_belajar_layout);
    }
}
